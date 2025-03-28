#include<stdio.h>
int main(){
    int  a,b,c;
    printf(" Enter a number : ");
    scanf("%d",&a);
    // if( a%3==0 || a%5==0){
    //     if( a%15!=0){
    //         printf(" The number is divisible by 5 and 3 but not 1512");
    //     }
    //     else{
    //         printf(" The number is divisible by 15");
    //     }
    // }
    // else{
    //     printf(" The number is not divisible by 5 and 3");
    // }
    if( (a%3==0 || a%5==0) && a%15!=0){
        printf(" The number is divisible by 5 and 3 and not by 15");
    }
    else{
        printf(" The condition not satisfies ");
    }

    return 0;

}