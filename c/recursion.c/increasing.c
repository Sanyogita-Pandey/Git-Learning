#include<stdio.h>
void increasing( int x,int n){
    // int a =1;
    // for( int i = 1; i<=n; i++){
    //     printf("%d\n",a);
    //     a++;
    if( x>n) return ;
    printf("%d\n",x);
    increasing(x+1 , n);
    return;
}
int main(){
    int n;
     printf(" Enter a number : ");
     scanf("%d",&n);
     increasing(1,n);
     return 0;
}