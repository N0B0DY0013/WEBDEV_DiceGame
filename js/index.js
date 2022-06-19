
function random_dice_number() {
    return (Math.floor(Math.random() * 6)) + 1
}

function trophy_visibility(css_id, css_class, visibility) {
    if(visibility == "hidden") {
        if(!document.querySelector(css_id).classList.contains(css_class)) {
            document.querySelector(css_id).classList.add(css_class)
        }
    } else {
        if(document.querySelector(css_id).classList.contains(css_class)) {
            document.querySelector(css_id).classList.remove(css_class)
        }
    }

}

function play_dice() {

    if (sessionStorage.getItem("first_time") == null) {
        sessionStorage.setItem("first_time", false);
        return;
    }

    trophy_visibility("#p1_trophy", "p1_trophy_invisible", "hidden");
    trophy_visibility("#p2_trophy", "p2_trophy_invisible", "hidden");

    let remarks = "";

    const player1_dice = random_dice_number();
    const player2_dice = random_dice_number();

    if(player1_dice == player2_dice) {
        remarks ="Draw!"
    } else {
        if(player1_dice > player2_dice) {
            remarks ="Player 1 Wins!"

            trophy_visibility("#p1_trophy", "p1_trophy_invisible", "shown");
        } else {
            remarks ="Player 2 Wins!"

            trophy_visibility("#p2_trophy", "p2_trophy_invisible", "shown");
        }
    }

    document.querySelector("#img_dice1").setAttribute("src", "images/dice" + player1_dice + ".png");
    document.querySelector("#img_dice2").setAttribute("src", "images/dice" + player2_dice + ".png");

    document.querySelector("#remarks_text").textContent = remarks;

}