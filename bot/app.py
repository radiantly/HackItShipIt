import discord
import asyncio
from arrr import _VERSION
import argparse as arrrgparse  # Geddit..? ;-)
import random
import sys
from pirate import _PIRATE_WORDS, _PIRATE_PHRASES, _WALK_THE_PLANK
from random_words import RandomWords
from string import ascii_uppercase

TOKEN = 'XXXXXXXXXXXXXXXXXXXXXXXX'
client = discord.Client()
r = RandomWords()

def get_version():
    """
    Returns a string representation of the version information of this project.
    """
    return ".".join([str(i) for i in _VERSION])


def translate(english):
    """
    Take some English text and return a Pirate-ish version thereof.
    """
    # Normalise a list of words (remove whitespace and make lowercase)
    words = [w.lower() for w in english.split()]
    # Substitute some English words with Pirate equivalents.
    result = [_PIRATE_WORDS.get(word, word) for word in words]
    # Capitalize words that begin a sentence and potentially insert a pirate
    # phrase with a chance of 1 in 5.
    capitalize = True
    for i, word in enumerate(result):
        if capitalize:
            result[i] = word.capitalize()
            capitalize = False
        if word.endswith((".", "!", "?", ":",)):
            # It's a word that ends with a sentence ending character.
            capitalize = True
            if random.randint(0, 5) == 0:
                result.insert(i + 1, random.choice(_PIRATE_PHRASES))
    return " ".join(result)

def main(arrrgv=None):
    """
    Entry point for the command line tool 'pirate'.
    Will print help text if the optional first argument is "help". Otherwise,
    takes the text passed into the command and prints a pirate version of it.
    """
    if not arrrgv:
        arrrgv = sys.argv[1:]

    arrrgparse.parser.add_argument("english", nargs="*", default="")
    arrrgs = arrrgparse.parser.parse_args(arrrgv)
    if arrrgs.english:
        try:
            plain_english = " ".join(arrrgs.english)
            print(translate(plain_english))
        except Exception:
            print(
                "Error processing English. The pirates replied:\n\n"
                "Shiver me timbers. We're fish bait. "
                "Summat went awry, me lovely! Arrr..."
            )
            sys.exit(1)

# Hangman Game Logic
hangmanGameRunning = False
hangmanWord = ""
wrongGuesses = 0
hangmanGuesses = []

def getWord():
    return f'`{" ".join([(c if c in hangmanGuesses else "_") for c in hangmanWord])}`'

def resetGame():
    global wrongGuesses
    global hangmanGuesses
    global hangmanGameRunning

    wrongGuesses = 0
    hangmanGameRunning = False
    hangmanGuesses = []

def guess(letter):
    global wrongGuesses
    if letter in hangmanGuesses:
        return "You've already guessed this letter!"
    hangmanGuesses.append(letter)
    if letter in hangmanWord:
        if set(hangmanWord) <= set(hangmanGuesses):
            resetGame()
            return f"You win! The word was {hangmanWord}"
        return "Correct! Word is now: " + getWord()
    if wrongGuesses > 3:
        resetGame()
        return f"{_WALK_THE_PLANK[4]}\nUh oh, you lose! The word was {hangmanWord}"
    wrongGuesses += 1
    return f"{_WALK_THE_PLANK[wrongGuesses - 1]}\nNope. Word is {getWord()}"

@client.event
async def on_message(message):
    global hangmanWord
    global hangmanGameRunning

    if message.author == client.user:
        return

    if hangmanGameRunning and len(message.content) == 1 and message.content.upper() in ascii_uppercase:
        await message.channel.send(guess(message.content.upper()))

    if message.content.startswith('!hello'):
        msg = 'Ahoy, {0.author.mention}!'.format(message)
        await message.channel.send(msg)

    if message.content.startswith('!pirate'):
        msg = ('{0.author.mention} be saying: ' + translate(message.content)).format(message)
        msg = msg.replace('!pirate', '')
        await message.channel.send(msg)

    if message.content.startswith('!walk the plank'):
        if hangmanGameRunning:
            await message.channel.send("A walk the plank game is currently in progress.")
        else:
            resetGame()
            hangmanWord = r.random_word().upper()
            hangmanGameRunning = True
            await message.channel.send(getWord())


client.run(TOKEN)
