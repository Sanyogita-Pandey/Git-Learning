#include<stdio.h>
int main(){
    int n;
    printf(" Enter the number : ");
    scanf("%d",&n);
    //1-2+3-4+5-6+7.......... n terms
    int sum = 0;
   // for( int i = 1; i<=n; i++){
     //   if(i%2==0) sum = sum - i;
     // if(i%2!=0) sum = sum + i;
  //  }
   // printf(" The sum is : %d",sum);
   if(n%2==0) sum = -n/2;
   if(n%2!=0) sum = -n/2 +n;
   printf(" The sum is %d",sum);
    return 0;
}