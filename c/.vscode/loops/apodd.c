#include<stdio.h>
int main(){
    int n ;
    printf(" Enter a number : ");
    scanf("%d",&n);
   // for(  int i = 1; i <= 2*n-1 ; i = i + 2 ){
    //    printf("%d ",i);
    //}
   // for( int i = 4 ; i <= 3*n+1 ; i = i + 3 ){
       // printf(" %d ",i);
   // }
   // we are going to use extra varisble 
   int a = 4;
   for ( int i = 1 ; i <= n ; i++){
    printf("%d ",a);
    a = a+5;
   }
    return 0;
}