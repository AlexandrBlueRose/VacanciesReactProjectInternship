// Задание 1

/**
 * Набор описывающий пол
 */
enum Genders {
    MALE = 'male',
    FEMALE = 'female',
}

/**
 * Тип описывающий параметры абстрактной персоны
 */
type Person = {
    /**
     * Имя человека
     */
    name: string;

    /**
     * возраст человека
     */
    age: number;

    /**
     * Пол: female, male
     */
    gender: Genders;
};

/**
 * Интерфейс описывающий пользователя
 *
 * @extends Person
 */
interface User extends Person {
    /**
     * Email пользователя
     */
    email: string;

    /**
     * Пароль пользователя
     */
    password: string;
}

/**
 * Пользователь для проверки
 *
 */
const Alex: User = {
    name: 'Alex',
    age: 36,
    email: 'Alex@gmail.com',
    gender: Genders.MALE,
    password: 'password',
};

console.log(`Задание 1\n${JSON.stringify(Alex)}`);




// Задание 2

/**
 * Набор описывающий тип животного(хищник/травоядный)
 */
enum AnimalType {
    HERBIVORE = 'herbivore',
    PREDATOR = 'Predator',
}

/**
 * Тип описывающий параметры абстрактного животного
 */
type Animal = {
    /**
     * Название животного
     */
    name: string;

    /**
     * Возраст животного
     */
    age: number;

    /**
     * Тип животного
     */
    type: AnimalType;
};

/**
 * Интерфейс описывающий кота
 *
 * @extends Animal
 */
interface Cat extends Animal {
    /**
     * Уровень милоты
     */
    sweetness: number;
}

/**
 * Интерфейс описывающий собаку
 *
 * @extends Animal
 */
interface Dog extends Animal {
    /**
     * Уровень преданности
     */
    loyalty: number;
}

/**
 * Интерфейс описывающий птицу
 *
 * @extends Animal
 */
interface Bird extends Animal {
    /**
     * Уровень бесполезности
     */
    uselessness: number;
}

/**
 * Красная птица для проверки
 *
 */
const redBird: Bird = {
    name: 'RedBird',
    age: 1,
    type: AnimalType.HERBIVORE,
    uselessness: 100,
};

/**
 * Собака породы хаски для проверки
 *
 */
const husky: Dog = {
    name: 'RedBird',
    age: 1,
    type: AnimalType.HERBIVORE,
    loyalty: 1000,
};

/**
 * Черная кошка для проверки
 *
 */
const blackCat: Cat = {
    name: 'RedBird',
    age: 1,
    type: AnimalType.HERBIVORE,
    sweetness: 10000,
};

console.log(
    `\nЗадание 2\nBlack cat:
    ${JSON.stringify(blackCat)}\nDog husky:
    ${JSON.stringify(husky)}\nRed Bird:
    ${JSON.stringify(redBird)}`
);




// Задание 3

/**
 * Набор описывающий статус выполнения задания
 */
enum TaskStatus {
    Active = 1,
    Removed = 0,
}

/**
 * Тип описывающий параметры задания
 */
type Task = {
    /**
     * Поле заголовка
     */
    title: string;

    /**
     * Поле описания
     */
    description: string;

    /**
     * Поле статуса задания
     */
    status: TaskStatus;

    /**
     * Поле даты
     */
    date: Date;
};

/**
 * Тип описывающий параметры задания
 */
type TaskList = {
    /**
     * Поле массив задач
     */
    taskList: Task[];

    /**
     * Функция удаления задания из объекта
     * @function
     *
     * @param {Task} task параметр задание для удаления
     *
     * @returns void
     */
    deleteItem: (task: Task) => void;

    /**
     * Функция добавления задания в объект
     * @function
     *
     * @param {Task} task параметр задание для добавления
     *
     * @returns void
     */
    addItem: (task: Task) => void;

    /**
     * Функция изменения задания в объекте(меняет title)
     * @function
     *
     * @param {Task} task параметр задание которое ищем
     * @param {string} newData параметр содержащий текст изменения
     *
     * @returns void
     */
    changeItem: (task: Task, newData: string) => void;
};

/**
 * Создание компании gs с типом TaskList
 *
 */
const gs: TaskList = {
    taskList: [
        {
            title: '',
            date: new Date(),
            description: '',
            status: TaskStatus.Active,
        },
    ],

    addItem(task: Task) {
        this.taskList.push(task);
    },
    deleteItem(task: Task) {
        this.taskList = this.taskList.filter(taskItem => taskItem !== task);
    },

    changeItem(task: Task, newData: string) {
        this.taskList = this.taskList.map(taskItem => {
            if (taskItem === task) {
                taskItem.title = newData;
            }

            return taskItem;
        });
    },
};

/**
 * Тестовое задание для проверки
 *
 */
const task: Task = { title: 'OK', date: new Date(), description: '', status: TaskStatus.Active };

gs.addItem(task);

console.log('\nadd:');
console.log(gs.taskList);

gs.changeItem(task, 'test');

console.log('\nchange:');
console.log(gs.taskList);

gs.deleteItem(task);

console.log('\ndelete:');
console.log(gs.taskList);



// Задание 4

/**
 * Тип описывающий пару ключ литерал и массив значений входного дженерика
 *
 */
type GroupObjects<T> = { [key: string]: T[] };

/**
 * Тип описывающий сущность ключе литерала из входного дженерика и значение входного дженерика соответствующего ключу
 *
 */
type GroupExtraction<T, V> = Record<keyof T, V>;

/**
 * Типизированная реализация groupBy
 * Входящий тип T и Value (они идентичны) сужается типом GroupExtraction и возвращает тип GroupObjects который в свою очередь
 * строит пару из ключа поля объекта как литерала и значения соответствующего выбранному полю
 *
 * @function
 * 
 * @param arr входной массив абстрактных сущностей с типом определенным дженериком
 * @param key ключ являющийся keyof параметром связанным с arr
 *
 * @returns GroupObjects<T>
 */
function groupBy<Value, T extends GroupExtraction<T, Value>>(arr: T[], key: keyof T): GroupObjects<T> {
    return arr.reduce((acc: GroupObjects<T>, cur: T) => {
        const groupKey = String(cur[key]);

        if (!acc[groupKey]) {
            acc[groupKey] = [];
        }

        acc[groupKey].push(cur);

        return acc;
    }, {} as GroupObjects<T>);
}

/**
 * Данные для проверки
 *
 */
const objects = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 25 },
    { id: 4, name: 'David', age: 30 },
];

const groupedByAge = groupBy(objects, 'age');
console.log(groupedByAge);



// Задание 5
// Выполнил это задание добавляя в структуру функций для массивов Array для полной 
// идентичности со стандартным map(хотя можно конечно и просто функцией)
// объявляем файл .ts модулем чтобы вмешиваться в глобальные прототипы
export { };
declare global {
    /**
     * Доопределяем стандартный глобальный интерфейс сущности Array новым методом
     *
     */
    interface Array<T> {
        /**
         * Типизированная реализация map
         * @function
         *
         * @param  callbackfn функция callback
         * @param {any} thisArg передача кастомного this для колбэка
         *
         * @returns Array<U>
         */
        mapNew<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): Array<U>;
    }
}

// В связи с тем, что Array.prototype readonly убираю предупреждение от eslint для этого задания 
// тк меняю прототип стандартного набора функций(куда поместил созданную мной функцию)
/* eslint no-extend-native: ["error", { "exceptions": ["Array"] }] */
Array.prototype.mapNew = function mapNew<U, T>(
    callbackfn: (value: T, index: number, array: T[]) => U,
    thisArg?: any
): U[] {
    if (this == null) {
        throw new TypeError('Cant iterate over undefined or null');
    }

    let context: U[] = this;
    const object: T[] = this;

    if (arguments.length > 1) {
        context = thisArg;
    }

    if (typeof callbackfn !== 'function') {
        throw new Error('Callback is not a function');
    }

    const len: number = object.length;
    const newArray: Array<U> = [];
    let i = 0;

    while (i < len) {
        if (i in object) {
            newArray[i] = callbackfn.call(context, this[i], i, object);
        }

        i += 1;
    }

    return newArray;
};

const mass: Array<number> = [1, 2, 3, 4, 5];

const newMass = mass.mapNew(item => item * 2);

console.log(newMass);
