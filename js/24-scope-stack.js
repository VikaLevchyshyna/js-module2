// let a = 10;

// function showNumber() {
//     let a = 20;
//     console.log('a in showNumber - ', a);
//     function showAnotherNumber() {
//         let a = 30;
//         console.log('a in showAnotherNumber - ', a);
//         function lastNumber() {
//             let a = 40;
//             console.log('a in lastNumber - ', a);
            
//         }
//         lastNumber();
//     }
//     showAnotherNumber();
// }

// console.log('a in global - ', a);

// showNumber();


// let a = 10;
// console.log('a in global - ', a);


// Task
// Write function for work with collection of courses:
// addCourse(courseName) - add course in the end of collection
// if courseName don't have - return 'Add some course';
// if courseName is in collection - return 'The course already exists';

// removeCourse(courseName) - delete course from collection
// if collection doesn't contain this course - return 'No course with this name';

// updateCourse(oldName, newName) - change old course on new course
// if collection doesn't contain old course - return 'No course with this name';


const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// function addCourse(courseName) {
//     if (!courseName) {
//         return 'Add some course';
//     }

//     if (courses.includes(courseName)) {
//         return 'The course already exists';
//     }

//     courses.push(courseName);
// }

// console.log(addCourse('Express'));
// console.log(courses);

// console.log(addCourse('CSS'));
// console.log(courses);

// console.log(addCourse());
// console.log(courses);


// const removeCourse = function(courseName) {
//     if (!courseName) {
//         return 'Give me some course to delete';
//     }
//     if (!courses.includes(courseName)) {
//         return 'No course with this name';
//     }
//     const index = courses.indexOf(courseName);
//     courses.splice(index, 1);
// }

// console.log(removeCourse('Express'));
// console.log(courses);

// console.log(removeCourse('Mongo'));
// console.log(courses);

// console.log(removeCourse());
// console.log(courses);


const updateCourse = (oldName, newName) => {
    if (!oldName || !newName) {
        return 'Give me some course names to change';
    }
    if (!courses.includes(oldName)) {
        return 'No course with this name';
    }
    const index = courses.indexOf(oldName);
    courses.splice(index, 1, newName);
}

console.log(updateCourse('CSS', 'Mongo'));
console.log(courses);

console.log(updateCourse('Vue', 'Node'));
console.log(courses);

console.log(updateCourse());
console.log(courses);