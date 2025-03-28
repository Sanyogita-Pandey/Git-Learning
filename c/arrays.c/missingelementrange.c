#include<stdio.h>
int main(){
    int x;
  int arr[10] = { 1,2,3,4,5,x,7,8,9,10};
    int sum = 0;
    int sum2 = (10*11)/2;
    for( int i=0; i<=9; i++){
        sum = sum + arr[i];
    }
    int missingelement = sum2 - sum;
    printf(" the missing element%d is : %d",x,missingelement);
    return 0;
}