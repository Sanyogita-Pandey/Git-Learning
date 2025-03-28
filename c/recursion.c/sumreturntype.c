#include<stdio.h>
int sum(int n){
       if(n==0) return 0;
    int a = n + sum(n-1);
      return a;
}
int main(){
    int n;
    printf(" Enter a number : ");
    scanf("%d",&n);
    int a = sum(n);
    printf("%d",a);
    return 0;
}
