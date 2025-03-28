#include<stdio.h>
int main(){
    int a,b;
    printf("Enter base : ");
     scanf("%d",&a);
    printf("Enter power : ");
     scanf("%d",&b);
    int power = 1;
    for( int i = 1; i <=b ; i++){
        power = power *a;
      //  printf(" number raised to the power of another is %d\n",power);
    }
     printf(" number raised to the power of another is %d",power);
    return 0;
}