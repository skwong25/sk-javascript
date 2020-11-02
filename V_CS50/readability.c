#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main(void)
{
    // Prompts user to input string of text
    string s = get_string("Enter text here:\n");
    // declares function
    int count_letters(string s);
    int count_words(string s);
    int count_sentences(string s);
    int calc_grade(int letters, int words, int sentences);

    int letters = count_letters(s);
    int words = count_words(s);
    int sentences = count_sentences(s);

    printf("%i letter(s)\n", letters);
    printf("%i word(s)\n", words);
    printf("%i sentences(s)\n", sentences);

    printf("Grade %i \n", calc_grade(letters, words, sentences));
}

// determines Grade reading level
    int calc_grade(int letters, int words, int sentences)
    {
        int factor = 100/words;
        // eg if words is 50 words, the factor is 2

        // L = average no. of letters per 100 words
        // S = average no. of sentences per 100 words

        int L = letters * factor;
        int S = sentences * factor;

        int index = 0.0588 * L - 0.296 * S - 15.8;
        return index;
    }

// defines function - iterates over string and returns no. of sentences
    int count_sentences(string s)
    {
        char *str = s;
        int count = 0;
        for (int i = 0; i < strlen(s); i++ )
        {
            if (str[i] == '.' || str[i] == '!' || str[i] == '?')
            {
                count++;
            }
        };
        return count;
    }

// defines function - iterates over string and returns no. of spaces
    int count_spaces(string s)
    {
        char *str = s;
        int count = 0;
        for (int i = 0; i < strlen(s); i++)
        {
            if (isspace(str[i]))
            {
                count++;

            }
        };
        return count;
    }

// defines function - returns no. of characters
// TODO - we ONLY want to count alphanumeric characters (not spaces or punctuation)
    int count_letters(string s)
    {
        char *str = s;
        int count = 0;
        for (int i = 0; i < strlen(s); i++)
        {
            if (isalnum(str[i]))
            {
                count++;

            }
        };
        return count;
    }

// defines function - returns no. of words
    int count_words(string s)
    {
        return count_spaces(s) +1 ;
    }
