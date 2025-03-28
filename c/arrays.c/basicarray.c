#include<stdio.h>
int main(){
// int arr[6] = { 2, 5, 7, 4, 6 ,8};
// arr[3] = 50;
// arr[1] = 2;
// printf("%d",arr[5]);
int arr[5];
for( int i = 0; i<=4; i++){
    printf("\n Enter element number %d : ",i+1);
    scanf("%d",&arr[i]);
}
//for( int i=0; i<5 ; i++){
    for( int i=4; i>=0 ; i--){
    printf("%d ",arr[i]);
}
   return 0;
}