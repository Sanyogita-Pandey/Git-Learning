#include<stdio.h>
int main(){
    int arr[5] = {9,4,6,222,0};
    int brr[5];
    for( int i=0;i<=4;i++){
        brr[i] = arr[4-i];
    }
    for( int i=0; i<=4; i++){
        printf("%d ",brr[i]);
    }
    return 0;
}