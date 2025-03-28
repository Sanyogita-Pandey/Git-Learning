#include<stdio.h>
void decreasing(int n){
    // int a=n+1;
    // if(n==1) return;
    // for( int i = 1; i<=n ; i++){
    //     a = a-1;
    //     printf("%d ",a);
    // }
    if(n==0) return;
    printf("%d\n",n);
    decreasing(n-1);
    return;
}
int main(){
    int n;
    printf(" Enter a number : ");
    scanf("%d",&n);
    decreasing(n);
    return 0;
}