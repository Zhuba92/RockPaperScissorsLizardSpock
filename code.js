var selectedItem;
var computerItem = 0;
$(document).ready(function ()
    {
        $("#pictureContainer img").click(chooseItemToBattle);

        var playerCounter = 0;
        var computerCounter = 0;

        function chooseItemToBattle() {  // find the image the player clicked on
            selectedItem = this.id;
            $("#grandWinner").text(""); // reset the grandWinner text
            $(this).fadeTo(1000, 0.15).fadeTo(3000, 1);

            getComputerItem();           // Get the random computer number 1 - 5
            console.log(computerItem);

                // check for various outcomes
                if (selectedItem === "rock")
                {
                    switch (computerItem)
                    {
                        case 1: // rock
                            $("#overallWinner").text(`You picked the same item, Please choose a different item.`);
                            break;
                        case 2: // paper
                        case 5: // spock
                            $("#overallWinner").text(`You lost the round.`);
                            computerCounter++;
                            break;
                        case 3: // scissors
                        case 4: // lizard
                            $("#overallWinner").text(`You win the round!`);
                            playerCounter++;
                            break;
                    }
                }
                else if (selectedItem === "paper")
                {
                    switch (computerItem)
                    {
                        case 1: // rock
                        case 5: // spock
                            $("#overallWinner").text(`You win the round!`);
                            playerCounter++;
                            break;
                        case 2: // paper
                            $("#overallWinner").text(`You picked the same item, Please choose a different item.`);
                            break;
                        case 3:
                        case 4:
                            $("#overallWinner").text(`You lost the round.`);
                            computerCounter++;
                            break;
                    }
                }
                else if (selectedItem === "scissors")
                {
                    switch (computerItem)
                    {
                        case 1: // rock
                        case 5:
                            $("#overallWinner").text(`You lost the round.`);
                            computerCounter++;
                            break;
                        case 2: // paper
                        case 4: // lizard
                            $("#overallWinner").text(`You win the round!`);
                            playerCounter++;
                            break;
                        case 3: // paper
                            $("#overallWinner").text(`You picked the same item, Please choose a different item.`);
                            break;
                    }
                }
                else if (selectedItem === "lizard")
                {
                    switch (computerItem)
                    {
                        case 1: // rock
                        case 3: // scissors
                            $("#overallWinner").text(`You lost the round.`);
                            computerCounter++;
                            break;
                        case 2: // paper
                        case 5: // spock
                            $("#overallWinner").text(`You win the round!`);
                            playerCounter++;
                            break;
                        case 4: // lizard
                            $("#overallWinner").text(`You picked the same item, Please choose a different item.`);
                            break;
                    }
                }
                else if (selectedItem === "spock")
                {
                    switch (computerItem)
                    {
                        case 1: // rock
                        case 3: // scissors
                            $("#overallWinner").text(`You win the round!`);
                            playerCounter++;
                            break;
                        case 2: // paper
                        case 4: // lizard
                            $("#overallWinner").text(`You lost the round.`);
                            computerCounter++;
                            break;
                        case 5: //spock
                            $("#overallWinner").text(`You picked the same item, Please choose a different item.`);
                            break;
                    }
                }

                $("#playerCounter").text(playerCounter);      // output player and computer win totals
                $("#computerCounter").text(computerCounter);

            if(playerCounter === 2)         // check to see if series is over
            {
                $("#grandWinner").text(`You win the series! Click another item to start a new game.`);
                $("#overallWinner").text("");
                playerCounter = 0;
                computerCounter = 0;
                $("#results").css({"border-style":"solid", "border-radius":"10px", "background-color":"lightblue"}).slideUp(500).slideDown(1000);
            }
            else if(computerCounter === 2)
            {
                $("#grandWinner").text(`You have lost the series! Click another item to start a new game.`);
                $("#overallWinner").text("");
                playerCounter = 0;
                computerCounter = 0;
                $("#results").css({"border-style":"solid", "border-radius":"10px", "background-color":"lightblue"}).slideUp(500).slideDown(1000);
            }

            function getComputerItem()    // generate computer pick
            {
                computerItem = Math.floor(Math.random() * 5) + 1;
                console.log(computerItem);
            }
        }
    }
);