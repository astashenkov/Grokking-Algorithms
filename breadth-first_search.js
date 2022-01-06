// Chapter №6


const queue = {
    "you": ["alice", "bob", "claire"],
    "bob": ["anuj", "peggy"],
    "alice": ["peggy"],
    "claire": ["thom", "jonny"],
    "anuj": [""],
    "peggy": [""],
    "thom": [""],
    "jonny": [""]
};

function search(name) {
    let searchQeueu = queue[name],
        element = null,
        searched = [];   

    while (searchQeueu.length) {
        element = searchQeueu.shift();
        if (!searched.includes(element)) {
            if (element && element.slice(-1) === "j") {     // Ищем узел заканчивающийся на букву "j". Логика выбора узла взята из книги для примера.
                break;
            } else {
                searched.push(element);
                searchQeueu = searchQeueu.concat(queue[element]);
            }
        }        
    }
    if (!searchQeueu.length) element = "Node not found.";
    return element;
}

console.log(search("you"));