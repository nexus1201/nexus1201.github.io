#Number Guessing Game
import random

level = ["Easy", "Medium", "Hard"]
def start():
    selection = True
    while selection:
        print("""
Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.

Please select the difficulty level:
1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)
""")  
        try:
            global difficulty
            difficulty = int(input("Enter your choice(1, 2, or 3): "))
            if difficulty in [1,2,3]:
                print(f"Great! You have selected the {level[difficulty - 1]} difficulty level.")
                print("Let's start the game!")
                selection = False
            else:
                print("Invalid selection. Please try again.")
        except ValueError:
            print("Invalid input. Please try again")


def game(difficulty):
    number = random.randint(1,100)
    chances = [10,5,3]
    lives = chances[difficulty - 1]
    while lives != 0:
        try:
            guess = int(input("Enter your guess: "))
            if 1 <= guess <= 100:
                if guess == number:
                    print("Congratulations! You guessed the correct number.")
                    break
                elif guess > number:
                    print(f"Incorrect! The number is less than {guess}.")
                    lives -= 1
                    print(f"{lives} attempts left.\n")
                    if lives == 0:
                        print(f"The correct number is {number}.")
                elif guess < number:
                    print(f"Incorrect! The number is greater than {guess}.")
                    lives -= 1
                    print(f"{lives} attempts left.\n")
                    if lives == 0:
                        print(f"The correct number is {number}.")
            else:
                print("Please enter a number between 1 and 100.")
        except ValueError:
            print("Invalid input. Please enter numbers only.")
            
start()
game(difficulty)
continue_playing = True
while continue_playing:
    decision = input("Do you want to play again? Y or N?").upper()
    if decision == "Y":
        start()
        game(difficulty)
    elif decision == "N":
        print("Thank you for playing, goodbye.")
        continue_playing = False
    else:
        print("Invalid input. Please type 'Y' for yes and 'N' for no.")

