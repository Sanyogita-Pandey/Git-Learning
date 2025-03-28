#include<stdio.h>
int main(){
    int arr[8] = { 9,8,7,6,5,4,3,2};
     int sumEven = 0;
        int sumodd = 0;
    for( int i = 0; i <=7; i++){
    if(arr[i]%2==0)
    sumEven = sumEven + arr[i];
    else sumodd+= arr[i];
    
    }
    printf("%d",sumEven - sumodd);
    return 0;
}