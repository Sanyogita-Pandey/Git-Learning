#include<stdio.h>
int main(){
    int n;
    printf(" Enter a number : ");
    scanf("%d",&n);
    for ( int i = 100 ; i>=0 ; i = i - 3){
        printf("%d ",i);
    }
    return 0;
}