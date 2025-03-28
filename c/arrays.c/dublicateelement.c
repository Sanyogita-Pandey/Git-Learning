#include<stdio.h>
int main(){
    int arr[11] = { 1,2,3,10,5,6,7,8,9,10,11};
    for(int i=0; i<=10;i++){
        for( int j=i+1; j<=10; j++){
            if(arr[i] == arr[j]){
                printf(" %d is the dublicate element :",arr[i]);
                break;
            }
        }
    }
    return 0;
}