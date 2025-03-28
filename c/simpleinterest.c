#include<stdio.h>
int main(){
    float p,r,t,si;
    p = 100;
    r = 10;
    t = 2;
    si = (p*r*t)/100;
    printf("%f\n",si);

    float principle,rate,time,Si;
    scanf("%f",&principle);
    scanf("%f",&rate);
    scanf("%f",&time);
    Si = (principle*rate*time)/100;
    printf("your simple interest is : %f",Si);

    float Principle,Rate,Time,Simpleinterest;
    printf(" \nEnter Principle :");
    scanf("%f",&Principle);
    printf(" Enter Rate :");
    scanf("%f",&Rate);
    printf(" Enter Time :");
    scanf("%f",&Time);
    Simpleinterest = (Principle*Rate*Time)/100;
    printf("Your Simple Interest Is : %f",Simpleinterest);



    return 0;
}
