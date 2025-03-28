#include<stdio.h>
int main(){
    int x;
    printf(" Enter a year : ");
    scanf("%f",&x);
    if(x%4==0){
        printf(" it is a leap year ");
    }
    else{
        printf(" not a leap year");
    }
    return 0;
}