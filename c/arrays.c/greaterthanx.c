#include<stdio.h>
int main(){
    int arr[8] = { 2,3,4,5,6,7,8,9};
    int x = 4;
    int count = 0;
for( int i = 0; i <= 7 ; i++){
    if( arr[i]>x)
            printf("%d ",arr[i]);
        }
for( int i = 0; i <= 7 ; i++){
     if( arr[i]>x) {
        count++;
         }
        
}
printf("\n%d",count);
    return 0;
}