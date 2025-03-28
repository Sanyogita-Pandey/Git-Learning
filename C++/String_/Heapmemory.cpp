#include<iostream>
using namespace std;
int main(){
    int *ptr = new int;
    *ptr = 5;
    cout<<*ptr<<endl;

    float *ptr2 = new float;
    *ptr2 = 3.6;
    cout<<*ptr2<<endl;

    delete ptr;
    delete ptr2;

    //for array delete[] p;


}