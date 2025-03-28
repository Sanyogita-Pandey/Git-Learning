#include<stdio.h>
#include<string.h>
int main(){
    char s1[88] = "brahman";
    char s2[88];
    strcpy(s2,s1);
    printf("%s",s2);
    return 0;
}