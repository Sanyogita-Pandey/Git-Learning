#include<stdio.h>
int main(){
    int a,b;
    printf(" length of rectangle : ");
    scanf("%f",&a);
    printf(" Enter breadth of rectangle : ");
    scanf("%f",&b);
    
    if(a*b==2*(a+b)){
        printf(" Area of rectangle is equal to its parameter");
    }
    else{
        printf(" Area of rectangle is not equal to its parameter");
    }
    return 0;
}