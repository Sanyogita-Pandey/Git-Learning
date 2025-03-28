#include<stdio.h>
int main(){
    int a,b;//a>b and if a<b then the answer will alway a 
    printf(" The value of a is : ");
    scanf("%d",&a);
    printf(" The value of b is : ");
    scanf("%d",&b);
    int r = a % b;
    printf(" The reminder is : %d",r);
    return 0;
}