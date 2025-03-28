#include<stdio.h>
int main(){
    int b = 7;
    int* x=&b;// int* used for pointer
   // *x = &x; // vvip -> *x = 7 //b is changed
   int** y=&x;// int** -> int* ka adress store krta h
    printf("%p\n",&x);//%p se address print hota h
    printf("%p\n",y);
    int a = 7;
    printf("%p",&a);
    return 0;
}