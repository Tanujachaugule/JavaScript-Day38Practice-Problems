function checkYear(Year)
{
    if (Year % 400 == 0)
    return true;

    if (Year % 100 == 0)
    return false;

    if (Year % 4 == 0)
    return true;
    return false;
}
let Year = 2023;
console.log("Leap year are")