# let the user know what's going on
print ("Welcome to the New World!")
print ("Please answer the questions below before you enter your adventure.")
print ("Your current level is: 1 lv.")
print ("--------------------------------")

# variables containing all of your story info
yourName = raw_input("Come up with a codename for your adventure: ")
yourTitle = raw_input("Enter your title: ")
location1 = raw_input("Name a non-real place: ")
adjective1 = raw_input("Enter an adjective: ")
color1 = raw_input("What is your favorite color?: ")
color2 = raw_input("What is your least favorite color?: ")
career1 = raw_input("What is your dream career?: ")
career2 = raw_input("Enter a different career: ")
object1 = raw_input("An object from your desk: ")
adjective2 = raw_input("Enter one more adjective: ")

# this is the story. it is made up of strings and variables.
# the \ at the end of each line let's the computer know our string is a long one
# (a whole paragraph!) and we want to continue more code on the next line. 
# play close attention to the syntax!

story = "Congratulation! " + yourTitle + " " + yourName + "from " + location1+ ". You have finished checking in. " \
    "Welcome to the New World as a " + career2 + ". " \
    "Sorry we cannot change your careet to " + career1 + " until you finish the career exam. " \
    "Your room is on the 2nd floor. Room code: " + color1 + "-" + adjective1 + ". Your luggage is already sent to your room by " + object1 + ". " \
    "Please follow the instruction on your terminal to unlock the door. " \
    "Additional reminder: " + color2 + " zone is locked zone for your level. Please level up first to unlock. " \
    "Enjoy your " + adjective2 + " adventure in the New World!" 
    
    

# finally we print the story
print (story)