/*
You will be given a string (x) featuring a cat 'C', a dog 'D' and a mouse 'm'. The rest of the string will be made up of '.'.
You need to find out if the cat can catch the mouse from its current position. The cat can jump (j) characters.
Also, the cat cannot jump over the dog.

if j = 5:
..C.....m. returns 'Caught!' <-- not more than j characters between
.....C............m...... returns 'Escaped!' <-- as there are more than j characters between the two, the cat can't jump far enough
if j = 10:
...m.........C...D returns 'Caught!' <--Cat can jump far enough and jump is not over dog
...m....D....C....... returns 'Protected!' <-- Cat can jump far enough, but dog is in the way, protecting the mouse
Finally, if all three animals are not present, return 'boring without all three'
*/

function cat_and_mouse(str, max_jump) {
    let str_lower = str.toLowerCase();
    let cat_position, mouse_position, dog_position;
    cat_position = str_lower.indexOf('c');
    mouse_position = str_lower.indexOf('m');
    dog_position = str_lower.indexOf('d');

    /* using regExp: has_animals = /(c|m|d)/i.test(str); */

    if (cat_position==-1 && mouse_position==-1 && dog_position==-1) {
        return 'boring without all three'
    }

    if (Math.min(cat_position, mouse_position) < dog_position && dog_position < Math.max(cat_position, mouse_position)) {
        return 'Protected!'
    } else {
        if (Math.abs(cat_position-mouse_position) <= max_jump) {
            return 'Caught!'
        } else {
            return 'Escaped!'
        }
    }
    

    return 'Something gone wrong';

}

console.log(cat_and_mouse('..j.....h.', 5));
console.log(cat_and_mouse('..c.....m.', 5));
console.log(cat_and_mouse('..c....m.', 5));
console.log(cat_and_mouse('d..m.......c.', 10));
console.log(cat_and_mouse('d..m.......c.', 5));
console.log(cat_and_mouse('..m....d...c.', 5));
console.log(cat_and_mouse('...m.........C...D', 10));