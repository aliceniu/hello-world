# an object describing our player
player = { 
    "name": "#7031-M",
    "title": "Mr.",
    "level": 1,
    "star": 10,
    "itemsInBag": ["diamond"],
    "location": "Lower Land",
    "friends": ["#1203-K"],
    "career": "Excutor"
}




def printGraphic(name):
    if (name == "title"):
        print '-----------------------------------------------------------------------------'
        print '       .__               .__        '
        print '  ____ |  | ___.__. _____|__|____   '
        print '_/ __ \|  |<   |  |/  ___/  \__  \  '
        print '\  ___/|  |_\___  |\___ \|  |/ __ \_'
        print ' \___  >____/ ____/____  >__(____  /'
        print '     \/     \/         \/        \/ '

    if (name == "game over"):
        print '   _________    _____   ____     _______  __ ___________  '
        print '  / ___\__  \  /     \_/ __ \   /  _ \  \/ // __ \_  __ \ '
        print ' / /_/  > __ \|  Y Y  \  ___/  (  <_> )   /\  ___/|  | \/ '
        print ' \___  (____  /__|_|  /\___  >  \____/ \_/  \___  >__|    '
        print '/_____/     \/      \/     \/                   \/        '

    if (name == "diamond"):
        print '  \     |     /  '
        print '    _________    '
        print ' _ /_|_____|_\ _ '
        print '   \. \   / ./   '
        print '     \.\ /./     '
        print '       \./       '

    if (name == "level up"):
        print '.__                     .__                  '
        print '|  |   _______  __ ____ |  |    __ ________  '
        print '|  | _/ __ \  \/ // __ \|  |   |  |  \____ \ '
        print '|  |_\  ___/\   /\  ___/|  |__ |  |  /  |_> >'
        print '|____/\___  >\_/  \___  >____/ |____/|   __/ '
        print '          \/          \/             |__|    '

    if (name == "task 1"):
        print '______________________'
        print '7      77  7  77     7'
        print '!__  __!|  !  ||  ___!'
        print '  7  7  |     ||  __|_'
        print '  |  |  |  7  ||     7'
        print '  !__!  !__!__!!_____!'

    if (name == "task 2"):
        print ' _____  __ __  ___  _____  __ ___ '
        print '/  _  \/  |  \/___\/     \|  |  / '
        print '|  |  ||  |  ||   ||  |--||  _ <  '
        print '\___\ \ \___/ \___/\_____/|__|__\ '
    
    if (name == "task 3"):
        print '._______ .______  ._______           ___ .______  '
        print ': __   / : __   \ : .___  \ .___    |   |:      \ '
        print '|  |>  \ |  \____|| :   |  |:   | /\|   ||       |'
        print '|  |>   \|   :  \ |     :  ||   |/  :   ||   |   |'
        print '|_______/|   |___\ \_. ___/ |   /       ||___|   |'
        print '         |___|       :/     |______/|___|    |___|'
        print '                     :              :             '
        print '                                    :             '

    if (name == "task 4"):
        print ' ___   ____   _   _ '
        print ') __( / __ \ ) ( ) ('
        print '| _)  ))__((  ) | ( '
        print ')_(   \____/ )_( )_('

    if (name == "task 5"):
        print '      |  |   |   \  |   _ \    ___|  '
        print '      |  |   |  |\/ |  |   | \___ \  '
        print '  \   |  |   |  |   |  ___/        | '
        print ' \___/  \___/  _|  _| _|     _____/  '

    if (name == "task 6"):
        print '           __      '
        print ' >>  |  | |   |<<  '
        print '|  | |  | |<< |>>| '
        print ' <<   \/  |__ |  \ '

    if (name == "task 7"):
        print '     _        _            _      '
        print ' __/\ \__  _/\ \___     __/\ \___ '
        print '(__   __) )(_ __ __) ) (_  ____) )'
        print '  /  \ \   /  |_| \ \  /  ._) )   '
        print ' /:.  \ \ /:.  _   \ \/:. | |___  '
        print ' \__  / / \___| |  / /\  _____) ) '
        print '    \/ /         \/ /  \/ /       '

    if (name == "task 8"):
        print '     _     _____   ___    __     __) '
        print ' ___/__)  (, /  | (,   ) (, )   /    '
        print '(, /        /---|     /    /   /     '
        print '  /      ) /    |_  _/_   (___/_     '
        print ' (_____ (_/      )   /   )   /       '
        print '        )       (__ /   (__ /        '

    if (name == "task 9"):
        print ' (         )          '
        print ' )\ )   ( /(  (       '
        print '(()/(   )\()) )\ )    '
        print ' /(_)) ((_)\ (()/(    '
        print '(_))_    ((_) /(_))_  '
        print ' |   \  / _ \(_)) __| '
        print ' | |) || (_) | | (_ | '
        print ' |___/  \___/   \___| '

    if (name == "congratulation"):
        print '                                          __          '
        print '  ____  ____   ____    ________________ _/  |_  ______'
        print '_/ ___\/  _ \ /    \  / ___\_  __ \__  \\   __\/  ___/'
        print '\  \__(  <_> )   |  \/ /_/  >  | \// __ \|  |  \___ \ '
        print ' \___  >____/|___|  /\___  /|__|  (____  /__| /____  >'
        print '     \/           \//_____/            \/          \/ '


def gameOver():
    if (player["level"] == 9):
        print "-----------------------------------------------------------------------------"
        printGraphic("congratulation")
        print "-----------------------------------------------------------------------------"
        print "You have finish the game!"
        print "name: " + player["name"]
        print "level: " + str(player["level"])

    else:
        print "---------------------------------------------------------------"
        printGraphic("game over")
        print "---------------------------------------------------------------"
        print "to be continued ->>"
        print "name: " + player["name"]
        print "level: " + str(player["level"])
    
    return
    

def continueToPlay():
    print "-----------------------------------------------------------------------------"
    print "Wow, are you sure you want to refuse?"
    print "All right, you have one more chance if you would like to trade stars."
    if (player["star"] >= 5):
        print "Yes or No?"
        continueToPlay = raw_input("Enter your answer > ")
        
        if (continueToPlay == "yes"):
            player["star"] -= 5
            print "Your current stars: " + str(player["star"])
            print "You can try again now."
            lowerLand(player["level"])
      
        else :
            gameOver()
            print "Bye~~"
    
    if (player["star"] <= 5):
        gameOver()
        print "Bye~~"





def tasks():
    print "You can type in too hard and pay 5 stars to get hint!"
    answer = raw_input("Type in your answer > ")

    if (answer == "the"):
        print "Awesome job!"
        print "You got the map of Elysia!"
        player["itemsInBag"].append("mapOfElysia")
        player["level"] += 1
        player["star"] += 5 
        lowerLand(player["level"])

    elif (answer == "brown"):
        print "Awesome job!"
        printGraphic("level up")
        print "You got find a book on the floor!"
        printGraphic("book")
        player["itemsInBag"].append("book")
        player["level"] += 1
        player["star"] += 5
        lowerLand(player["level"])

    elif (answer == "quick"):
        print "Awesome job!"
        printGraphic("level up")
        print "You got find a diamond on the side of the stair!"
        printGraphic("diamond")
        player["itemsInBag"].append("diamond")
        player["level"] += 1
        player["star"] += 5
        lowerLand(player["level"])

    elif (answer == "fox"):
        print "Awesome job!"
        printGraphic("level up")
        player["level"] += 1
        player["star"] += 5
        lowerLand(player["level"])

    elif (answer == "jump"):
        print "Awesome job!"
        printGraphic("level up")
        player["level"] += 1
        player["star"] += 5
        lowerLand(player["level"])

    elif (answer == "over"):
        print "Awesome job!"
        printGraphic("level up")
        player["level"] += 1
        player["star"] += 5
        lowerLand(player["level"])

    elif (answer == "the"):
        print "Awesome job!"
        printGraphic("level up")
        player["level"] += 1
        player["star"] += 5
        lowerLand(player["level"])

    elif (answer == "lazy"):
        print "Awesome job!"
        printGraphic("level up")
        player["level"] += 1
        player["star"] += 5
        lowerLand(player["level"])

    elif (answer == "dog"):
        print "Awesome job!"
        printGraphic("level up")
        player["level"] += 1
        player["star"] += 5
        lowerLand(player["level"])

    elif (answer == "too hard"): #hint of the tasks
        player["star"] -= 5

        if (player["level"] == 1):
            print "A grammatical article with three letters"
            tasks()
    
        if (player["level"] == 2):
            print "It means fast"
            tasks()

        if (player["level"] == 3):
            print "A color"
            tasks()

        if (player["level"] == 4):
            print "An animal"
            tasks()

        if (player["level"] == 5):
            print "An action"
            tasks()

        if (player["level"] == 6):
            print "An adverb that means on top of something"
            tasks()

        if (player["level"] == 7):
            print "A grammatical article with three letters"
            tasks()

        if (player["level"] == 8):
            print "An adjective that means moving slowly and gently"
            tasks()

        if (player["level"] == 9):
            print "Another animal"
            tasks()

    else:
        print "Sorry, decoding fails. Task accomplish failed."
        lowerLand(player["level"])


def choiceOfPlayer ():
    choiceOfPlayer = raw_input("Enter yes or no > ")

    if (choiceOfPlayer == "yes"):
        print "Please decode the following image >"
        if (player["level"] == 1):
            printGraphic("task 1")

        if (player["level"] == 2):
            printGraphic("task 2")

        if (player["level"] == 3):
            printGraphic("task 3")

        if (player["level"] == 4):
            printGraphic("task 4")
    
        if (player["level"] == 5):
            printGraphic("task 5")
      
        if (player["level"] == 6):
            printGraphic("task 6")

        if (player["level"] == 7):
            printGraphic("task 7")

        if (player["level"] == 8):
            printGraphic("task 8")

        if (player["level"] == 9):
            printGraphic("task 9")
    
    else:
        continueToPlay()


def lowerLand(level):
    if (level == 1): # task 1
        print "-----------------------------------------------------------------------------"
        print "Pass the door, you walk into a dim alley with only neon lights on."
        print "A new task pops up from your termial."
        print "Would you accept the task?"
        choiceOfPlayer()
        tasks()


    if (level == 2): #task 2
        print "-----------------------------------------------------------------------------"
        print "You follow the map and see a stair going up."
        print "You step on the stair and a new task pops up in your terminal."
        print "Would you accept the task?"
        choiceOfPlayer()
        tasks()


    if (level == 3): #task 3
        print "-----------------------------------------------------------------------------"
        print "You step upstairs and walk into a small but beautiful atrium."
        print "There is sun light outside the door across the atrium."
        print "Do you want to keep going?"
        choiceOfPlayer()
        tasks()

    if (level == 4): #task 4
        print "-----------------------------------------------------------------------------"
        print "You step out from the atrium and stand "
        print "Do you want to keep going?"
        choiceOfPlayer()
        tasks()

    if (level == 5): #task 5
        print "-----------------------------------------------------------------------------"
        print "You step out from the atrium and stand "
        print "Do you want to keep going?"
        choiceOfPlayer()
        tasks()

    if (level == 5): #task 5
        print "-----------------------------------------------------------------------------"
        print "Do you want to keep going?"
        choiceOfPlayer()
        tasks()

    if (level == 6): #task 6
        print "-----------------------------------------------------------------------------"
        print "Do you want to keep going?"
        choiceOfPlayer()
        tasks()

    if (level == 7): #task 7
        print "-----------------------------------------------------------------------------"
        print "Do you want to keep going?"
        choiceOfPlayer()
        tasks()

    if (level == 8): #task 8
        print "-----------------------------------------------------------------------------"
        print "Do you want to keep going?"
        choiceOfPlayer()
        tasks()

    if (level == 9): #task 9
        print "-----------------------------------------------------------------------------"
        print "Do you want to keep going?"
        choiceOfPlayer()
        tasks()
    
    


    
    


def introStory():
    #intro below the title
    print "-----------------------------------------------------------------------------"
    print "Welcome back to ELYSIA. A world of sweet dream as well as nightmare."
    player["name"] = raw_input("Please log in with your name: ")
    player["title"] = raw_input("Please enter your prefered title: ")

    print "-----------------------------------------------------------------------------"
    print "My kindest greeting " + player["title"] + " " + player["name"] + "."
    print "Loading..."
    print "Your log in location is Lower Land. Be careful at night, earthquake happens a lot here."
    print "Your ultimate goal is to get to the Upper Land."
    print "There are tasks you ought to complete."
    print "This path is not easy. Are you ready?"

    answer = raw_input("Please choose yes or no > ")

    if (answer == "yes"):
        print "-----------------------------------------------------------------------------"
        print "The entry way is opened and waiting for you."
        print "Through the door, you can see the Lower Land..."
        raw_input("Press enter > ")
        lowerLand(1)

    else:
        print "System error...There is no way back :)"
        answer = raw_input("Press enter > ")
        introStory()

  
def main():
  printGraphic("title")
  introStory()

main()