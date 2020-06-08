
function updateState(state, action) {
    if (action.type === 'INCREMENT') {
        return { count: state.count + action.amount };
    } else if (action.type === 'DECREMENT') {
        return { count: state.count - action.amount };
    } else {
        return state;
    }
}

class Store {
    constructor(updateState, state) {
        this._state = state;
        this._updateState = updateState;
        this._callbacks = [], // массив для хранения списка функций
    }

    get state() {
        return this._state;
    }

    update(action) {
        this._state = this._updateState(this._state, action);
        this._callbacks.forEach(callback => callback());
    }

    subscribe(callback) {
        this._callbacks.push(callback);
        return () => this._callbacks = this._callbacks.filter(cb => cb != callback);
        //фильтр вернет новый массив, но без функции передаваемой как параметр callbacks 
    }
}

const initialState = { count: 0 };

const store = new Store(updateState, initialState);

let incrementAction = { type: 'INCREMENT', amount: 5 };
let decrementAction = { type: 'DECREMENT', amount: 3 };

const unsubscribe = store.subscribe(() => console.log('change 1', store.state));
store.subscribe(() => console.log('change2', store.state));

// метод Подписаться добавляет в массив callbacks передаваемую ему функцию
// а уже в метоже update, вызываются все функции из массива callbacks. 
// т.к. метод update изменяет state, следом будет вызыватся ф-я из массива, в нашем слуучае это консоль
// но можно добавить еще фунций например алерт
store.subscribe(() => alert('я изменился'));
// после каждого вызова store.update() будет вызываться и консоль и алерт

store.update(incrementAction);
unsubscribe();
//если вызвать функцию отпитаться после первого обновления, то консоль вызовется 1 раз, далее удалится из массива callbacks
// вторая подписка change2 будет срабатывать каждый раз как выполняется метод update()
store.update(decrementAction);
store.update('{}');