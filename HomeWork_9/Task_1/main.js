// Є масив coursesArray котрий лежить в arrays.js
// Створити для кожного елементу масиву свій блок, блок розділити блоками
// в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const course of coursesArray) {
    let div = document.createElement("div");
    div.classList.add('course');
    document.body.appendChild(div);

    let name = document.createElement("h2");
    name.classList.add('name');
    name.innerText = course.title;
    div.appendChild(name);

    let time = document.createElement("div");
    time.classList.add('time');
    div.appendChild(time);

    let month = document.createElement("p");
    month.classList.add('month');
    month.innerText = `month: ${course.monthDuration}`;
    time.appendChild(month);

    let hour = document.createElement("p");
    hour.classList.add('hour');
    hour.innerText = `hour: ${course.hourDuration}`;
    time.appendChild(hour);

    let module = document.createElement("module");
    module.classList.add('module');
    div.appendChild(module);

    let skills = document.createElement("ul");
    module.appendChild(skills);
    for (const skill of course.modules) {
        let li = document.createElement("li");
        li.innerText = skill;
        skills.appendChild(li);
    }
}