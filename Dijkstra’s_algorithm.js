// Chapter №7


const graph = {
        'start': {'a': 6, 'b': 2},
        'a': {'fin': 1},
        'b': {'a': 3, 'fin': 5}
      },
      costs = {'start': 0, 'a': 6, 'b': 2, 'fin': Infinity},
      parents = {'a': 'start', 'b': 'start', 'fin': ''},
      procesed = [];

function dijkstra() {
    for (let key in graph) {
        console.log('---------------------------------------');
        console.log(`key: ${key}`);       //*
        if (!procesed.includes(key)) {
            for (let neighbor in graph[key]) {
                console.log(`neighbor: ${neighbor}`);       //*
                if (costs[key] + graph[key][neighbor] < costs[neighbor]) {
                    costs[neighbor] = costs[key] + graph[key][neighbor];
                    parents[neighbor] = key;
                    console.log(`costs ${neighbor}: ${costs[neighbor]}`);      //*
                }
            }  
            procesed.push(key);
        }
    }
}
  
dijkstra();
console.log(`Min weight - ${costs.fin}`);



// Присутствует логическая ошибка - алгоритм не учитывает обновленный вес ноды a после обработки ноды b.
// Из-за этого имеем на выходе неверное значение 7 вместо 6.
// Пока не разобрался где допущена ошибка.