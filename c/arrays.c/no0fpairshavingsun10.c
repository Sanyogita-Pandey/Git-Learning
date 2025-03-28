#include<stdio.h>
int main(){
    int arr[10] = {1,2,3,4,5,6,7,8,9,10};
    int x = 10;
    int totalpairs = 0;
    for( int i = 0; i <=9; i++){
        for ( int j = i+1 ; j<=9; j++){
            if( arr[i] + arr[j]==x){
                totalpairs++;
                printf("(%d , %d)",arr[i],arr[j]);
            }
        }
    }
    printf("\n%d",totalpairs);
    return 0;
}