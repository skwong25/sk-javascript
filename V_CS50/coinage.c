// asks the user how much change is owed  
// prints the minimum number of coins with which that change can be made.
// Use get_float to get the user’s input and printf to output your answer.
// Assume that the only coins available are quarters (25¢), dimes (10¢), nickels (5¢), and pennies (1¢). 
// Include a loop to ensure user's input is positive float value
// End output should be integer\n
// Note inherent inprecision of float values - to avoid, convert all amounts to cents (integers)
// and round cents to the nearest penny using round(), a method of math.h

/*
Expected behaviour: 
$ ./cash
Change owed: 0.41
4
*/

#include <stdio.h>
// #include <cs50.h>
#include <math.h>
#include <ctype.h>
// note that .h stands for header

int main(void) 
{
    float change = 0.86; 
    // prompt repeats until a positive float is inputted
    /*
    do
    {
    change = get_float("Change owed:\n");
    } while ( change <= 0);
    */
    
    int cents = round(change*100);
    printf("cents: %i\n", cents);
    
    int pennies = 0; 
    int nickels = 0;
    int dimes = 0;
    int quarters = 0;
        
    while (cents > 0)
    {
        if (cents >= 25) 
        {
            cents -= 25; 
            quarters++; 
        }
        else if (cents >= 10)
        {
            cents -= 10;
            dimes++;
        }
        else if (cents >= 5)
        {
            cents -=  5; 
            nickels++;
        }
        else if (cents >= 1)
        {
            cents -=  1; 
            pennies++;
        }
    }
    
    printf("Your change is %i quarters, %i dimes, %i nickels and %i pennies\n", quarters, dimes, nickels, pennies);
    
    int sum_coinage = quarters + dimes + nickels + pennies; 
    printf("%i\n", sum_coinage); 
}