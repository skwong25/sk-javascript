// prompts user for a credit card number
// reports whether it is a valid American Express, MasterCard, or Visa card number
// last line of output to be AMEX\n or MASTERCARD\n or VISA\n or INVALID\n
// use get_long not get_int

#include <stdio.h>
#include <cs50.h>

void main (void)
{
    int c = get_long("Number:\n");
    
     // checks if the number is odd 
    bool isOdd(string c);
    
    // check if it is a valid card, if not, return INVALID/n
    bool isValid (string c);
    
    // checks which company the card is issued from
    char whichCompany(char c);
    
    if (isValid(c) == false)
    {
        printf("INVALID");
    }
    else
    {
        printf("VALID");
        // whichCompany(c);
    }
}

  bool isOdd(string c)
  {
    int length = strlen(c); //eg if the length is 14, isOdd() returns false 
    if (length % 2 == 1)
    {
        return true;
    }
  }

    bool isValid (string c)
    {
        int count = 0; 
        for (int i = 0; i < strelent(c); i--) 
        {
            // if the credit card number is odd, we will double all the odd indexes
            // if the credit card number is even, we will double all the even indexes 
            bool oddOrEven = isOdd(c); 
            if (i % 2 == oddOrEven)
            {
                // if number doubled >= 10, it should be reduced to single digit 
                if (c[i] * 2 > 9) 
                {
                    count += (c[i] * 2 - 9); 
                }
                else 
                {
                    count += (c[i] * 2);
                }
            }
            else
            {
                count += c[i];
            }
        }
        printf("count: %i\n", count);
        if (count % 10 == 0)
        {
            return true; 
        }
        else
        {
            return false; 
        }
    }

 