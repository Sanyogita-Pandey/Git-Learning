#include<stdio.h>
int main(){
    int a,b,c;
    printf(" Enter first number : ");
    scanf("%d",&a);
    printf(" Enter second number : ");
    scanf("%d",&b);
    printf(" Enter third number : ");
    scanf("%d",&c);
    // if(a>b){//b is out of race
    //     if(a>c)
    //         printf("%d is greatest",a);
    //     else //a<c  -> b<a<C
    //         printf("%d is greatest",c);
    // }
    // else{//b>c -> a ab sbse bda to nhi h
    //      if(b>c)
    //         printf("%d is greatest",b);
    //     else //c>b  -> a<b<c
    //         printf("%d is greatest",c);

    //}
    if(a>b&&a>c) 
        printf(" the greatest among them is %d",a);
     if(b>a&&b>c)
          printf(" the greatest among them is %d",b);
      if(c>a&&c>b)
           printf(" the greatest among them is %d",c);
    


   
return 0;
}