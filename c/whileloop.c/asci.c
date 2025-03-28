#include<stdio.h>
int main(){
    int n;
    printf(" Enter the number : ");
    scanf("%d",&n);
    for( int i = 65; i<= n ; i++){
        char ch = (char)i;
        printf("%c -> ",ch);
        printf("%d\n",i);
    }
    return 0;
}