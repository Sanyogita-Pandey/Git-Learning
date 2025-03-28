#include<stdio.h>
#include<string.h>
int main(){
    char* str = "Pandeyji";// \0 is not counted here
    int x = strlen(str);
    printf("%d",x);
    return 0;
}