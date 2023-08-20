const pi = 3.14;

const calculateArea = (choice,side,length,breadth,radius) =>{   
    let area = 0.0; 
    switch(choice){
        case "square":
            side ? (area = side * 4) : (area = -1)
            break;
        case "rectangle":
            let len, bre
            if(length || breadth){
                length ? (len= length) : (len = -6.5)
                breadth ? (bre = breadth) : (bre = 4.5)
                area = len * bre
            } else{
                area = -1
            }
            break;
        case "circle":
            radius ? (area = pi * (radius ** 2)) : (area = -1)
            break;
        case "cone":
            area = -1
            break
        default:
            area = 0
            break
    }
    // write logic here
    // note that you check the values passed are not null before performing any operation on them
    return area
}
module.exports = {calculateArea}
