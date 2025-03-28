#include<stdio.h>
int main(){
    int a,b ,p;
    printf(" point  on the x axis : ");
    scanf("%d",&a);
    printf(" point  on y axis : ");
    scanf("%d",&b);
    if(a==0 && b==0){
        printf(" point (a,b) is origin");
    }
    else if( a==0){
        printf(" point(a,b) lies on y axis");
    }
    else if(b==0){
        printf(" Point (a,b) lies on x axis");
    }
    else{
        printf(" point does not lie on any axis ");
    }
    return 0;
}