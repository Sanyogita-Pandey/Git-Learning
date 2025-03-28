#include<stdio.h>
int main(){
    int n;
    printf(" Enter a number : ");
    scanf("%d",&n);
    for( int i =1; i<=n ; i++){
        for( int j = 1 ; j<=i ; j++){
    if(i%2!=0)
        printf(" %d",j); 
    }
    int a = 1;
    for( int k = 1; k <=i; k++){
             int d = 1;
            d = a + 64;
            char ch =(char)d;
             if(i%2==0)
        printf(" %c",ch);
         a++;
    }
       printf("\n");
    }   
    
     
    return 0;
}