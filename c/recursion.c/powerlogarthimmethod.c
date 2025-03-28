#include<stdio.h>
int powerlog(int a, int b){
   // if(b==1) return a;
    if(b==0) return 1;
    int x = powerlog(a,b/2);
        if(b%2==0)
        return x*x;
        else return x*x*a;
    }
int main(){
    int a; 
    printf(" Enter a base :");
    scanf("%d",&a);
    int b; 
    printf(" Enter power :");
    scanf("%d",&b);
    printf(" a raised to the power b is %d ",powerlog(a,b));
    return 0;

}