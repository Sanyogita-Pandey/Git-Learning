#include<stdio.h>
#include<string.h>
int main(){
    char s1[] = " University";
    char s2[] = " of lucknow";
    strcat(s1,s2);
    printf("%s",s1);
    return 0;
}