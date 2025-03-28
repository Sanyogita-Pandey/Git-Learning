#include<stdio.h>
int main(){
   // char arr[] = {'H','E','L','L','O','\0'};
        // char arr[] = " Hello sanyogita\0";
        char arr[] = " Hello sanyogita";// computer khud hi /0 lga dete h jb hum is trah ki initilisation krte h
    int i=0;
    while(arr[i]!='\0'){
        // printf("%c",arr[i]);
        //  printf("%c",*(arr + i));
         printf("%c",i[arr]);
        i++;
    }
    return 0;
}