#include<stdio.h>
int stair(int n){
    if(n==1|n==2) return n;
    if(n==3) return 4;
    int totalways = stair(n-1) + stair(n-2) + stair(n-3) ;
    return totalways;
}
int main(){
    int n;
    printf(" Enter a stair number : ");
    scanf("%d",&n);
    printf(" total no of ways to climt at that stair is %d",stair(n));
    return 0;
}