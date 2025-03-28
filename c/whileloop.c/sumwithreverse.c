#include<stdio.h>
int main(){
    int n;
    printf(" Enter a number : ");
    scanf("%d",&n);
    int r = 0;
    int a = 0;
    int lastdigit = 0;
      int q = (n+a);
    while(n>0){
        lastdigit = n%10;
          r = r + lastdigit;
          a = a*10;
           a = a + (n%10);
          n = n/10;
        
    }
    printf(" sum of the digits is %d ",r);
    printf(" \nreverse of the digits %d",a);
     
    printf(" \nsum of the digit and its reverse %d",q);

    return 0;
}