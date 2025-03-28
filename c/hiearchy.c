#include<stdio.h>
int main(){
    int i = 2*3/4 +4/4 +8 - 2 + 5/8;
    printf("%d",i);
    
    int I = 2, j = 3, k, l;
    float a,b;
    k = I/j*j;
    l = j/I*I;
    a = I/j*j;
    b = j/I*I;
    printf(" %d %d %f %f",k, l, a, b);
    return 0;
}