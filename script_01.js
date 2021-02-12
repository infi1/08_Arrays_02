
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."
// "Q" (question) --> "?"
// "E" (exclamation) --> "!"

function ausgabe(str) {
    console.log(str);
}

/*** Funktion mit Array als Parameter */
// mögliche Tests:
ausgabe(getSentence(["Ich","bin","Peter"],"S"));
ausgabe(getSentence(["Bist","du","Peter"],"Q"));
ausgabe(getSentence(["Ich","bin"],"E"));
ausgabe(getSentence(["Ich","bin"],"Ekhkjhjk"));

function getPunct(punct) {
    if (punct == "S") {
        return ".";
    } else if (punct == "Q") {
        return "?";
    } else if (punct == "E") {
        return "!";
    } else {
        return; // undefined
    }
}

function getSentence(arr, punct) {
    punct = getPunct(punct);
    // ausgabe(punct);
    if (punct && Array.isArray(arr)) {
        let gap = " ";
        let str = "";
        for (i = 0; i < arr.length - 1; i++) {
            str += arr[i] + gap;
        }
        str += arr[arr.length - 1] + punct;
        return str;
    } else {
        return "Ungültiges Eingabe. Wird beendet.";
    }
}