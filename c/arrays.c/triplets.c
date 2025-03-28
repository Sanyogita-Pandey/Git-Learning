#include<stdio.h>
int main(){
    int arr[11] = { 2,3,5,7,9,11,33,22,44,55,23};
    int x=15;
    int totalways=0;
    for( int i = 0; i<=10; i++){
        for(int j = i+1; j<=10; j++){
            for(int k = j+1; j<=10; j++){
                if(arr[i]+arr[j]+arr[k]==x){
                totalways++;
                printf("(%d,%d,%d)\n",arr[i],arr[j],arr[k]);
                }
            }
        }
    }
    printf("%d",totalways);
    return 0;
}